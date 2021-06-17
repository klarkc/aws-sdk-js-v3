import { __extends } from "tslib";
import { CreateRevisionRequest, CreateRevisionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRevisionCommand, serializeAws_restJson1CreateRevisionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation creates a revision for a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new CreateRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRevisionCommandInput} for command's `input` shape.
 * @see {@link CreateRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRevisionCommand = /** @class */ (function (_super) {
    __extends(CreateRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRevisionCommand(input) {
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
    CreateRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "CreateRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRevisionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRevisionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRevisionCommand(input, context);
    };
    CreateRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRevisionCommand(output, context);
    };
    return CreateRevisionCommand;
}($Command));
export { CreateRevisionCommand };
//# sourceMappingURL=CreateRevisionCommand.js.map