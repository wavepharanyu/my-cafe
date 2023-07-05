import React from 'react'
import { AuthProvider } from './AuthContext'
import { CartProvider } from './CartContext'
import { FormProvider } from './FormContext'
import { OrderProvider } from './OrderContext'
import { ProductProvider } from './ProductContext'


const AppProvider = ({children}) => {
  return (
        <AuthProvider>
            <CartProvider>
                <FormProvider>
                    <OrderProvider>
                        <ProductProvider>
                            {children}
                        </ProductProvider>
                    </OrderProvider>
                </FormProvider>
            </CartProvider>
        </AuthProvider>
  )
}

export default AppProvider