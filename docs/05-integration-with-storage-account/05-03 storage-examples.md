# Create Storage Account in Portal

### Use resource creation tool form any place in portal and select type: Storage Account
![img.png](assets/sa_create_000.png)
![img.png](assets/sa_create_001.png)

### Base attributes

 - Resource Group (prefilled if creation started from existing group)
 - Name (unique per tenant, alpha-numerics)
 - Region (use closest or subscription defined)
 - Redundancy (LRS is preferred for simple cases)

![img.png](assets/sa_create_002.png)

### Advanced attributes
Mostly those attributes can be left alone on defaults
For simple cases to decrease pricing use "cool" access-tier without cross tenant replication

![img.png](assets/sa_create_003.png)

### Networking, DataProtection and Encryption
Those sections also can be passed on-defaults in most cases
Use public-access for simplicity of network configuration
![img.png](assets/sa_create_004.png)

Most data protection attributes can be switched off to save costs if it's not a production environment
![img.png](assets/sa_create_005.png)

If you are not planning to use external encryption key generation, use default options
![img.png](assets/sa_create_006.png)

### Review
Show all previously selected options and attributes
![img.png](assets/sa_create_007.png)

