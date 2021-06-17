import { __extends } from "tslib";
import { PutProvisionedConcurrencyConfigRequest, PutProvisionedConcurrencyConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand, serializeAws_restJson1PutProvisionedConcurrencyConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a provisioned concurrency configuration to a function's alias or version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutProvisionedConcurrencyConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutProvisionedConcurrencyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProvisionedConcurrencyConfigCommandInput} for command's `input` shape.
 * @see {@link PutProvisionedConcurrencyConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutProvisionedConcurrencyConfigCommand = /** @class */ (function (_super) {
    __extends(PutProvisionedConcurrencyConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutProvisionedConcurrencyConfigCommand(input) {
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
    PutProvisionedConcurrencyConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "PutProvisionedConcurrencyConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutProvisionedConcurrencyConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutProvisionedConcurrencyConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutProvisionedConcurrencyConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutProvisionedConcurrencyConfigCommand(input, context);
    };
    PutProvisionedConcurrencyConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand(output, context);
    };
    return PutProvisionedConcurrencyConfigCommand;
}($Command));
export { PutProvisionedConcurrencyConfigCommand };
//# sourceMappingURL=PutProvisionedConcurrencyConfigCommand.js.map