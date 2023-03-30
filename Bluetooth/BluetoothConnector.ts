import react from "react";
import {BleManager, Device } from 'react-native-ble-plx';

export class BluetoothConnector{
    static manager = new BleManager();
    static foundBracelets = new  Array<Device>;

    static scanDevices(){
        this.manager.startDeviceScan(null, null,(error, device) =>{
            if(error){
                return;
            }
            if(device?.name?.includes('BIPSAB')){
                this.foundBracelets.push(device);
            }       
        })
    }
    static stopDeviceScan(){
        this.manager.stopDeviceScan();
    }

    static connectDevice(deviceId:string){
        let device = this.foundBracelets.find((device)=> device.id === deviceId);
        if(!device){
            return "Nothing found";
        }
        try {
            this.manager.connectToDevice(device.id);
        } catch (error) {
            return error
        }
    }
    static disconnectDevice(deviceId){
        this.manager.cancelDeviceConnection(deviceId).catch((error)=>{
            return error
        })
    }
}