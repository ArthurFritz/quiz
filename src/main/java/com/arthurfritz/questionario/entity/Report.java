package com.arthurfritz.questionario.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;


@Data
@Builder
@Document(collection = "reports")
public class Report {

    @Id
    private String id;

    @NotNull
    private String name;

    @NotNull
    private String email;

    @NotNull
    private LocalDateTime createAt;

    private LocalDateTime updateAt;

    @NotNull
    private Status status;

    private List<String> stacks;

    private List<String> devs;

    private List<String> tests;

    private Long errors;

}
