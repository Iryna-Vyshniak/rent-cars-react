import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useUniquePropValues } from '../../shared/hooks';
import { resetFilter, setFilter } from '../../redux/cars/carsSlice';
import { selectFilter } from '../../redux/cars/carsSelectors';
import { priceOptions } from '../../shared/utils';
import Button from '../Button';

const Filter = ({ cars }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const price = priceOptions(cars);
  const uniqueBrands = useUniquePropValues(cars, 'make');

  const isFormDisabled = cars?.length === 0;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    shouldDisable: isFormDisabled
  });

  useEffect(() => {
    reset(filter);
  }, [filter, reset]);

  const onSubmit = data => {
    dispatch(setFilter(data));
  };

  const resetFilterInRedux = () => {
    dispatch(resetFilter());
    reset({
      brand: '',
      price: '',
      from: '',
      to: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`form flex-wrap ${isFormDisabled ? 'pointer-events-none opacity-60' : ''}`}
      disabled={isFormDisabled}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="form mb-2 flex-wrap gap-3 items-center">
          <div className="select-wrapper mb-2">
            <label htmlFor="brand" className="select-label">
              Car brand
            </label>
            <Controller
              name="brand"
              control={control}
              rules={{ required: true, message: 'Brand is required' }}
              render={({ field }) => (
                <>
                  <select {...field} className="select-brand">
                    <option value="" className="select-placeholder">
                      Enter the text
                    </option>
                    {uniqueBrands &&
                      uniqueBrands.map((make, idx) => (
                        <option key={idx} value={make} className="select-text">
                          {make}
                        </option>
                      ))}
                  </select>
                  {errors.brand && (
                    <p className={`error ${isFormDisabled ? 'opacity-0' : 'opacity-100'}`}>
                      {errors.brand.type === 'required'
                        ? 'Brand is required'
                        : errors.brand.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="select-wrapper mb-2">
            <label htmlFor="price" className="select-label">
              Price/ 1 hour
            </label>
            <div>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: true,
                  min: {
                    value: 0,
                    message: 'Must be 0 or greater'
                  }
                }}
                render={({ field }) => (
                  <>
                    <select {...field} className="select-price">
                      <option value="" className="select-placeholder">
                        To $
                      </option>
                      {price &&
                        price.map((price, index) => (
                          <option key={index} value={price} className="select-text">
                            {price}
                          </option>
                        ))}
                    </select>
                    {errors.price && (
                      <p className={`error ${isFormDisabled ? 'opacity-0' : 'opacity-100'}`}>
                        {errors.price.type === 'required'
                          ? 'Price is required'
                          : errors.price.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="select-wrapper mb-2">
            <label htmlFor="minMileage" className="select-label">
              Car mileage / km (from)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="From"
                className="select-placeholder select-from"
                {...register('from', {
                  required: 'This field is required',
                  min: {
                    value: 0,
                    message: 'Must be 0 or greater'
                  }
                })}
              />

              <input
                type="number"
                placeholder="To"
                className="select-placeholder select-to"
                {...register('to', {
                  required: 'This field is required',
                  min: {
                    value: 0,
                    message: 'Must be 0 or greater'
                  },
                  validate: (value, { from }) => {
                    if (parseInt(value) > parseInt(from)) {
                      return true;
                    }
                    return 'To must be greater than From';
                  }
                })}
              />
              <p
                className={`error flex items-center justify-between gap-1 ${
                  isFormDisabled ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {errors?.from && <span>{errors.from.message}</span>}
                {errors?.to && <span>{errors.to.message}</span>}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-6 mb-2 flex flex-wrap items-center justify-center gap-3">
          <Button type="submit" className="button-search" label="Search" />
          <Button
            type="button"
            className="button-search"
            onClick={resetFilterInRedux}
            label="Reset"
          />
        </div>
      </div>
    </form>
  );
};

Filter.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Filter;
