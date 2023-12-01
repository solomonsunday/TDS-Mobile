/* eslint-disable react-hooks/exhaustive-deps */
import {Paragraph} from '@components/text/text';
import colors from '@utility/colors';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import cloth from '@assets/img/cloth.png';
import {heightPixel, widthPixel} from '@utility/pxToDpConvert';
import {AppButton} from '@components/button';
import {ViewContainer} from '@components/view';
import {useDispatch} from 'react-redux';
import {addToBasket} from '@store/basket';

type CardType = 'pricelist' | 'basket';

interface IProps {
  item: {
    label: string;
    price: number | string;
    id: string;
    quantity?: number;
  };
  type?: CardType;
  onDelete?: () => void;
}

export const ClotheItem = ({
  item: {label, price, quantity: qty, id},
  type = 'pricelist',
  onDelete,
}: IProps) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const editQuantity = (type: string) => {
    if (type === 'dcs' && quantity <= 0) {
      return;
    }
    setQuantity(prev => (type === 'dcs' ? prev - 1 : prev + 1));
  };

  useEffect(() => {
    if (type === 'basket') {
      setQuantity(qty as number);
    }
  }, []);

  const addItemToBasket = () => {
    const item = {
      label,
      price,
      id,
      quantity,
    };

    dispatch(addToBasket(item));
  };

  return (
    <ViewContainer style={styles.container}>
      <View style={styles.row}>
        <Image source={cloth} />
        <View style={{marginLeft: 10}}>
          <Paragraph fontSize={16}>{label}</Paragraph>
          <Paragraph fontSize={16}>{price}</Paragraph>
        </View>
      </View>
      <View>
        {type === 'basket' && (
          <AppButton
            style={[styles.btn, {borderWidth: 0, marginBottom: 3}]}
            textStyle={{color: colors.red}}
            height={40}
            text="Remove"
            variant="secondary"
            onPress={() => {
              onDelete && onDelete();
            }}
          />
        )}
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <Pressable
            onPress={() => editQuantity('dcs')}
            style={[styles.circle]}>
            <Paragraph style={styles.sign} textAlign="center">
              -
            </Paragraph>
          </Pressable>
          <View style={{marginHorizontal: 8}}>
            <Paragraph fontSize={17} lineHeight={21} textAlign="center">
              {quantity}
            </Paragraph>
          </View>
          <Pressable
            onPress={() => editQuantity('inc')}
            style={[styles.circle]}>
            <Paragraph style={styles.sign} textAlign="center">
              +
            </Paragraph>
          </Pressable>
        </View>
        {type === 'pricelist' && (
          <AppButton
            style={styles.btn}
            height={40}
            text="Add to basket"
            variant="secondary"
            onPress={addItemToBasket}
          />
        )}
      </View>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: widthPixel(40),
    width: widthPixel(40),
    borderRadius: 20,
    justifyContent: 'space-around',
    backgroundColor: colors.border,
  },
  btn: {
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: heightPixel(8),
  },
  sign: {
    // borderWidth: 1,
    fontSize: 18,
    width: '100%',
    marginLeft: 4,
  },
});
