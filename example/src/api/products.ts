import api from './client'
import paths from '../constants/api-paths'

export const getProductsIndex = async (
  params: Record<string, string | number>
) => {
  try {
    const productsIndexPath: string = paths.products.index()
    const { data } = await api.get(productsIndexPath, { params })

    return data
  } catch (e) {
    throw e
  }
}
