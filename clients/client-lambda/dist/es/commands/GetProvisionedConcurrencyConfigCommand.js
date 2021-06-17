import { __extends } from "tslib";
import { GetProvisionedConcurrencyConfigRequest, GetProvisionedConcurrencyConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand, serializeAws_restJson1GetProvisionedConcurrencyConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the provisioned concurrency configuration for a function's alias or version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProvisionedConcurrencyConfigCommand = /** @class */ (function (_super) {
    __extends(GetProvisionedConcurrencyConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProvisionedConcurrencyConfigCommand(input) {
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
    GetProvisionedConcurrencyConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetProvisionedConcurrencyConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProvisionedConcurrencyConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProvisionedConcurrencyConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProvisionedConcurrencyConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetProvisionedConcurrencyConfigCommand(input, context);
    };
    GetProvisionedConcurrencyConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand(output, context);
    };
    return GetProvisionedConcurrencyConfigCommand;
}($Command));
export { GetProvisionedConcurrencyConfigCommand };
//# sourceMappingURL=GetProvisionedConcurrencyConfigCommand.js.map