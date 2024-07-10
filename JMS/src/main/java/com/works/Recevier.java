package com.works;

import com.works.models.Email;
import jakarta.jms.Message;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class Recevier {

    @JmsListener(destination = "mailDestination", containerFactory = "mailContainerFactory")
    public void recevierEmail(Email email, Message message) {
        try {
            System.out.println( message.getJMSMessageID() );
            System.out.println("Send Email:" + email);
            Thread.sleep(1000);
        }catch (Exception ex) { }
    }

}
