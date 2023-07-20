package com.example.DBDemo.service;

import com.example.DBDemo.entity.Address;
import com.example.DBDemo.reposiroty.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AddressService {

    final private AddressRepository addressRepository;


    public void saveAddress(Address address) {
        addressRepository.save(address);
    }
}
