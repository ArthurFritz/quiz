package com.arthurfritz.questionario.dto;

import com.arthurfritz.questionario.entity.Status;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ItemResponseDTO {

    private String id;
    private String name;
    private String email;
    private LocalDateTime send;
    private Status status;

}
