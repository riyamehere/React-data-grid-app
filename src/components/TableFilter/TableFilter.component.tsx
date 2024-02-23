import React, { useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { statusOptions, distributionOptions} from '../../customConstants/index';
import tagIcon from '../../assets/tag.svg'
import locationIcon from '../../assets/location.svg'
import downloadIcon from '../../assets/download.svg'
import searchIcon from '../../assets/search.svg'
import { IFilterProps } from '../../interfaces';

/**
 * @author      : Riya Mehere
 * @date        : 2024-02-22
 * @description : This is the child component which is responsible for all the filters
*/

const TableFilterComponent: React.FC<IFilterProps> = ({
    selectedStatus,
    selectedDistribution,
    searchKeyword,
    onChangeKeyword,
    handleFilterChange,
    exportToExcel
  }) => {

    useEffect(() => {
        handleFilterChange('status', selectedStatus || '');
      }, [selectedStatus]);
    
      useEffect(() => {
        handleFilterChange('distribution', selectedDistribution || '');
      }, [selectedDistribution]);
    
    return (
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>

        <TextField
          placeholder="Search..."
          value={searchKeyword}
          onChange={(e) => onChangeKeyword(e.target.value)}
          sx={{ 
            width: '375px',
            marginRight: '20px',
            height: '20px',
            color:'#9C9C9C', 
            fontFamily: 'Poppins',
            "& .MuiInputBase-root":{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
          }
          }}
          InputProps={{
            startAdornment: (
              <img src={searchIcon} alt="Icon" style={{ marginRight: '8px' }} />
            )
          }}
          
        />
        <FormControl sx={{width: '255px', 
        marginRight: '20px',
        "& .MuiInputBase-root":{
            borderRadius: '10px',
            background: '#FFFFFF',
          }}}>
          <InputLabel sx={{fontSize: '16px', alignSelf: 'center', color:'#9C9C9C', fontFamily: 'Poppins'}} shrink={false}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={tagIcon} alt="Icon" style={{ marginRight: '8px' }} />
            {selectedStatus === '' ? 'Status' : ''}
          </Box>
          </InputLabel>
          <Select
            value={selectedStatus || ''}
            onChange={(e) => handleFilterChange("status",e.target.value as string)}
          >
            <MenuItem value="">All</MenuItem> {/* All option */}
            {statusOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{width: '255px', "& .MuiInputBase-root":{
            borderRadius: '10px',
            background: '#FFFFFF',
          }}}>
          <InputLabel sx={{fontSize: '16px', color:'#9C9C9C', fontFamily: 'Poppins'}} shrink={false}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={locationIcon} alt="Icon" style={{ marginRight: '10px' }} />
            {selectedDistribution === '' ? 'Distribution' : ''}
          </Box>
          </InputLabel>
          <Select
            value={selectedDistribution || ''}
            onChange={(e) => handleFilterChange("distribution",e.target.value as string)}
          >
            <MenuItem value="">All</MenuItem> {/* All option */}
            {distributionOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </Box>
        <Box>
            
        <Button sx={{
            height: '55px',
            borderRadius: '50px',
            background: '#157AFE',
            paddingX: '30px',
            paddingY: '20px',
            color: '#FFFFFF',
            ":hover" :{
                background: '#4583FF',
            },
            fontSize: '18px',
            textTransform: 'none'
        }}
        onClick={exportToExcel}
        >
           <Box component="img" sx={{marginRight: '10px'}} src={downloadIcon}/>
            Export orders
        </Button>
        </Box>
      </Box>
    );
  };
  
  export default TableFilterComponent;