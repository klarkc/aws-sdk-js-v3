import { __extends } from "tslib";
import { CreateIntegrationAssociationRequest, CreateIntegrationAssociationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateIntegrationAssociationCommand, serializeAws_restJson1CreateIntegrationAssociationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create an AppIntegration association with an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIntegrationAssociationCommand = /** @class */ (function (_super) {
    __extends(CreateIntegrationAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateIntegrationAssociationCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateIntegrationAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "CreateIntegrationAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateIntegrationAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateIntegrationAssociationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateIntegrationAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateIntegrationAssociationCommand(input, context);
    };
    CreateIntegrationAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateIntegrationAssociationCommand(output, context);
    };
    return CreateIntegrationAssociationCommand;
}($Command));
export { CreateIntegrationAssociationCommand };
//# sourceMappingURL=CreateIntegrationAssociationCommand.js.map