"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeviceStatusCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the device status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateDeviceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStatusCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateDeviceStatusCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityProviderClient";
        const commandName = "UpdateDeviceStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UpdateDeviceStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.UpdateDeviceStatusResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateDeviceStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateDeviceStatusCommand(output, context);
    }
}
exports.UpdateDeviceStatusCommand = UpdateDeviceStatusCommand;
//# sourceMappingURL=UpdateDeviceStatusCommand.js.map