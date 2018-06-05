/**
* Makecode block for plant watering system
*/

namespace SGBotic{
    let pinMoistureSel: AnalogPin
    let pinPumpSel: AnalogPin
    let pumpPowerValue: number
    
 
    export enum pumpStatEnum{
    
        //%block="On"
        On = 1,
        //%block="Off"
        Off = 0
    }
    
   /**
    * Define pins that connect to sensor and water pump
    */
    //% subcategory=Plant-Watering-System
    //% blockId="PWS_init" block="Plant Watering System| connect moisture sensor to %pinMoisture| water pump to %pinMPump"
    //% weight=100 blockExternalInputs=true blockGap=8
    export function init_PWS(pinMoisture: AnalogPin, pinMPump: AnalogPin): void {
      
        pinMoistureSel = pinMoisture
        pinPumpSel = pinMPump
        
        pumpPowerValue = 1023
        basic.pause(100)
    }
    
 
   /**
    * Start/stop water pump
    */
    //% subcategory=Plant-Watering-System
    //% blockId="PWS_pumpControl" block="water pump %pumpStat"
    //% weight=80 blockGap=8
    export function pumpControl(pumpStat: pumpStatEnum): void {
      let pPumpStat: number
      pPumpStat = pumpStat
      
      if(pPumpStat === pumpStatEnum.On)
      {
        pins.analogWritePin(pinPumpSel, pumpPowerValue)
      
      }else
      {
        pins.analogWritePin(pinPumpSel, 0)
      }
    }
    
  /**
    * Read moisture level
    */
    //% subcategory=Plant-Watering-System
    //% blockId="PWS_readMoistureSensor" block="moisture"
    //% weight=90 blockGap=8
    export function readMoistureSensor(): number {
        
        return pins.analogReadPin(pinMoistureSel)
    }   
    
     /**
    * Set water pump power (25 to 100, default 100)
    * @param pumpPower is to set the flow rate of water, eg: 100
    */
    //% subcategory=Plant-Watering-System
    //% blockId="PWS_setPumpPower" block="pump power %pumpPower"
    //% weight=70 blockGap=8
    //% pumpPower.min=25 pumpPower.max=100
    export function setPumpPower(pumpPower: number) {
        pumpPowerValue = pumpPower
        
        pumpPowerValue = (pumpPowerValue * 1023) / 100
    }   
}