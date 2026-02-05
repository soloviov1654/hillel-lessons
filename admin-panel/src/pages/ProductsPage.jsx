import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Alert,
} from '@mui/material'
import { deleteProductRequest, fetchProductsRequest } from '../store/productsSlice'
import { logout } from '../store/authSlice'
import EditProductDialog from '../components/EditProductDialog'
import AddProductDialog from '../components/AddProductDialog'

function ProductsPage() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.products)
  const [editing, setEditing] = useState(null)
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProductsRequest())
    }
  }, [dispatch, items.length])

  const count = useMemo(() => items.length, [items.length])

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Box>
            <Typography variant="overline" color="primary">
              Олимп | Admin
            </Typography>
            <Typography variant="h4">Каталог товаров</Typography>
            <Typography variant="body2" color="text.secondary">
              Всего позиций: {count}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsAdding(true)}
            >
              Добавить товар
            </Button>
            <Button variant="outlined" color="primary" onClick={() => dispatch(logout())}>
              Выйти
            </Button>
          </Stack>
        </Stack>

        {error ? (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {error}
          </Alert>
        ) : null}

        <Paper elevation={0} sx={{ border: '1px solid #eadfce' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Фото</TableCell>
                <TableCell>Название</TableCell>
                <TableCell>Пол</TableCell>
                <TableCell>Сезон</TableCell>
                <TableCell>Метки</TableCell>
                <TableCell align="right">Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((product) => (
                <TableRow key={product.id} hover>
                  <TableCell>
                    <Chip label={product.image} variant="outlined" />
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight={600}>{product.title}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      ID: {product.id}
                    </Typography>
                  </TableCell>
                  <TableCell>{product.gender}</TableCell>
                  <TableCell>{product.season}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {product.isNew ? (
                        <Chip label="NEW" color="primary" size="small" />
                      ) : null}
                      {product.isColor ? (
                        <Chip label="COLOR" color="secondary" size="small" />
                      ) : null}
                      {!product.isNew && !product.isColor ? (
                        <Chip label="—" size="small" variant="outlined" />
                      ) : null}
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setEditing(product)}
                      >
                        Редактировать
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => dispatch(deleteProductRequest(product.id))}
                      >
                        Удалить
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {loading ? (
            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Загрузка...
              </Typography>
            </Box>
          ) : null}
        </Paper>
      </Container>

      <EditProductDialog product={editing} onClose={() => setEditing(null)} />
      <AddProductDialog open={isAdding} onClose={() => setIsAdding(false)} />
    </Box>
  )
}

export default ProductsPage
