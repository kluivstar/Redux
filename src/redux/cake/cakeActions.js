import React from 'react'
import { BUY_CAKE } from './cakeTypes'

// BUY_CAKE to specify the reducer case to execute.
// payload: number to carry the number of cakes to buy.
export function buyCake(number = 1){
    return {
        type: BUY_CAKE,
        payload: number
    }
    
}
