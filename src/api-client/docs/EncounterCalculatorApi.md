# EncounterCalculatorApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**encounterCalculatorPost**](#encountercalculatorpost) | **POST** /encounter-calculator | Calculate monster CR for encounter|
|[**encounterCalculatorRecommendSpellSlotsGet**](#encountercalculatorrecommendspellslotsget) | **GET** /encounter-calculator/recommend/spell-slots | Get recommended spell slots for an enemy of the given CR|
|[**encounterCalculatorRecommendStatsGet**](#encountercalculatorrecommendstatsget) | **GET** /encounter-calculator/recommend/stats | Get recommended stats for an enemy of the given CR|

# **encounterCalculatorPost**
> Array<RequestsMonster> encounterCalculatorPost(encounter)

Calculate the appropriate Challenge Rating for monsters in a D&D 5e encounter based on party size, level, and difficulty

### Example

```typescript
import {
    EncounterCalculatorApi,
    Configuration,
    RequestsCalculateEncounterCRsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EncounterCalculatorApi(configuration);

let encounter: RequestsCalculateEncounterCRsRequest; //Encounter CR calculation request

const { status, data } = await apiInstance.encounterCalculatorPost(
    encounter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **encounter** | **RequestsCalculateEncounterCRsRequest**| Encounter CR calculation request | |


### Return type

**Array<RequestsMonster>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Calculated monster CRs and XP values |  -  |
|**400** | Bad request - invalid request format or calculation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **encounterCalculatorRecommendSpellSlotsGet**
> Array<ResponsesSpellSlotsPerCrResponse> encounterCalculatorRecommendSpellSlotsGet()


### Example

```typescript
import {
    EncounterCalculatorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EncounterCalculatorApi(configuration);

let cr: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.encounterCalculatorRecommendSpellSlotsGet(
    cr
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cr** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ResponsesSpellSlotsPerCrResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Calculated spell slots for the given CR |  -  |
|**400** | Bad request - invalid request format or calculation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **encounterCalculatorRecommendStatsGet**
> Array<ResponsesRecommendedStatsResponse> encounterCalculatorRecommendStatsGet()


### Example

```typescript
import {
    EncounterCalculatorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EncounterCalculatorApi(configuration);

let cr: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.encounterCalculatorRecommendStatsGet(
    cr
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cr** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ResponsesRecommendedStatsResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Calculated stats for the given CR |  -  |
|**400** | Bad request - invalid request format or calculation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

