package com.thiranex.blogplatform.model;

import java.time.LocalDateTime;

public class Comment {
    private Long id;
    private String content;
    private Long postId;
    private Long authorId;
    private LocalDateTime createdAt;

    public Comment() {}
    public Comment(Long id, String content, Long postId, Long authorId, LocalDateTime createdAt) {
        this.id = id;
        this.postId = postId;
        this.content = content;
        this.authorId = authorId;
        this.createdAt = createdAt;
    }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public Long getPostId() { return postId; }
    public void setPostId(Long postId) { this.postId = postId; }
    public Long getAuthorId() { return authorId; }
    public void setAuthorId(Long authorId) { this.authorId = authorId; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
