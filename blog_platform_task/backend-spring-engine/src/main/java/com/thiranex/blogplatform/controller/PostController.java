package com.thiranex.blogplatform.controller;

import com.thiranex.blogplatform.model.Post;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    private List<Post> postStorage = new ArrayList<>();

    @GetMapping
    public List<Post> getAllPosts() {
        return postStorage;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        return postStorage.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        post.setId((long) (postStorage.size() + 1));
        post.setCreatedAt(LocalDateTime.now());
        postStorage.add(post);
        return post;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post updatedPost) {
        for (Post post : postStorage) {
            if (post.getId().equals(id)) {
                post.setTitle(updatedPost.getTitle());
                post.setContent(updatedPost.getContent());
                return ResponseEntity.ok(post);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        boolean removed = postStorage.removeIf(p -> p.getId().equals(id));
        return removed ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }
}
