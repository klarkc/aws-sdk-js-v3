"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableMFADeviceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables the specified MFA device and associates it with the specified IAM user. When
 *             enabled, the MFA device is required for every subsequent login by the IAM user
 *             associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, EnableMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, EnableMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new EnableMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableMFADeviceCommandInput} for command's `input` shape.
 * @see {@link EnableMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EnableMFADeviceCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "IAMClient";
        const commandName = "EnableMFADeviceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.EnableMFADeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryEnableMFADeviceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryEnableMFADeviceCommand(output, context);
    }
}
exports.EnableMFADeviceCommand = EnableMFADeviceCommand;
//# sourceMappingURL=EnableMFADeviceCommand.js.map