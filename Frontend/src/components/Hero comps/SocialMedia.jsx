import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button, TextField, Card, CardMedia, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/system";

// CSS-in-JS Variables
const styles = {
  pageBackground: "#e8f5e9",
  primaryColor: "#2e7d32",
  textColor: "#1b5e20",
};

const StyledContainer = styled(Container)({
  backgroundColor: styles.pageBackground,
  minHeight: "100vh",
  padding: "20px",
});

const PostCard = styled(Card)({
  maxWidth: 500,
  margin: "20px auto",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

export default function SocialMedia({email}) {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch posts from backend API (placeholder for now)
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePost = async () => {
    if (!text || !image) return;

    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);

    const response = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const newPost = await response.json();
      setPosts([newPost, ...posts]);
      setText("");
      setImage(null);
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h4" color={styles.textColor} align="center" gutterBottom>
        Social Media Feed
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <TextField
          label="Write something..."
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button variant="contained" color="success" onClick={handlePost}>
          Post
        </Button>
      </Box>

      {posts.map((post, index) => (
        <PostCard key={index}>
          <CardContent display="flex" alignItems="center">
            <Avatar src={post.userProfileImage} alt={post.username} sx={{ marginRight: 2 }} />
            <Typography variant="h6" color={styles.textColor}>{post.username}</Typography>
          </CardContent>
          <CardMedia component="img" height="200" image={post.imageUrl} alt="Post" />
          <CardContent>
            <Typography variant="body1" color={styles.textColor}>{post.text}</Typography>
          </CardContent>
        </PostCard>
      ))}
    </StyledContainer>
  );
}
