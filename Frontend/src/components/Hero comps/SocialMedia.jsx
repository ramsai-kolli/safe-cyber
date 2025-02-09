import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button, TextField, Card, CardMedia, CardContent, Avatar, Paper } from "@mui/material";
import { styled } from "@mui/system";

// CSS-in-JS Variables
const styles = {
    pageBackground: "#121212",
    primaryColor: "#00c853",
    secondaryColor: "#00e676",
    textColor: "#ffffff",
    cardBackground: "#1e1e1e",
    borderRadius: "16px",
    boxShadow: "0px 10px 30px rgba(0, 200, 83, 0.3)",
  };
  
  const StyledContainer = styled(Container)({
    backgroundColor: styles.pageBackground,
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });
  
  const PostCard = styled(Card)({
    maxWidth: 600,
    width: "100%",
    margin: "20px auto",
    backgroundColor: styles.cardBackground,
    color: styles.textColor,
    borderRadius: styles.borderRadius,
    boxShadow: styles.boxShadow,
  });
  
  const StyledButton = styled(Button)({
    background: `linear-gradient(45deg, ${styles.primaryColor}, ${styles.secondaryColor})`,
    color: "#fff",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "30px",
    transition: "0.3s",
    '&:hover': {
      transform: "scale(1.05)",
    },
  });
  
  const InputContainer = styled(Paper)({
    backgroundColor: styles.cardBackground,
    padding: "20px",
    borderRadius: styles.borderRadius,
    boxShadow: styles.boxShadow,
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

export default function SocialMedia({email}) {
    const [posts, setPosts] = useState([
        {
          username: "John Doe",
          userProfileImage: "https://via.placeholder.com/50",
          text: "Hello everyone! This is my first post!",
          imageUrl: "https://via.placeholder.com/400",
        },
        {
          username: "Jane Smith",
          userProfileImage: "https://via.placeholder.com/50",
          text: "Loving this new platform! 🌿",
          imageUrl: "https://via.placeholder.com/400",
        },
      ]);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [comp, setComp] = useState(1);
  const [url, setUrl] = useState(`/getpublic`);
  useEffect(() => {
    // Fetch posts from backend API (placeholder for now)
    fetch(`https://safecyber-api.onrender.com/api/${url}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
      console.log("tab switched");
      
  }, [url]);

  const handlePost = async () => {
    if (!text) return;

    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);
    formData.append("email", email);

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

  const handlePublic =()=>{
    setComp(1);
    setUrl(`/getpublic`)
   }
   const handleProfile =()=>{
    setComp(2);
    setUrl(`/getprofposts${email}`); // or something
   }

  return (
    <StyledContainer>
      <Typography variant="h3" color={styles.textColor} align="center" style={{ fontFamily: 'CursiveStyledMN' }} gutterBottom>
        Social Media Feed
      </Typography>
          
      <div className="sm-nav">
        <p onClick={handlePublic} className={comp === 1 ? "active-tab" : ""}  >Public</p>
        <p onClick={handleProfile} className={comp === 2 ? "active-tab" : ""} >Your Profile</p>
      </div>
          
      <InputContainer>
        <TextField
          label="Write something..."
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#bbb" } }}
          InputProps={{ style: { color: "#fff" } }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <label htmlFor="fileInput">
       <div className="media-pic-sm"></div>
      </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"    // --------------------> may save backend 
          onChange={(e) => setImage(e.target.files[0])}
          style={{ marginBottom: "10px", color: "#fff", display: "none" }}
        />
        <StyledButton onClick={handlePost}>Post</StyledButton>
      </InputContainer>

      {posts.map((post, index) => (
        <PostCard key={index}>
            <CardContent display="flex" alignItems="center">
                <Avatar src={post.userProfileImage} alt={post.username} sx={{ marginRight: 2, width: 50, height: 50 }} />
                <Typography variant="h6" color={styles.textColor}>{post.username}</Typography>
            </CardContent>
            
            <CardContent>
                    <Typography variant="body1" color={styles.textColor}>{post.text}</Typography>
            </CardContent>
            
            <CardMedia component="img" height="300" image={post.imageUrl} alt="Post" style={{ borderRadius: "10px" }} />
          
        </PostCard>
      ))}
    </StyledContainer>
  );
}
