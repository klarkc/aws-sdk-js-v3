import { __extends } from "tslib";
import { CreateDataSetRequest, CreateDataSetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDataSetCommand, serializeAws_restJson1CreateDataSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation creates a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new CreateDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSetCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataSetCommand = /** @class */ (function (_super) {
    __extends(CreateDataSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDataSetCommand(input) {
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
    CreateDataSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "CreateDataSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDataSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDataSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDataSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDataSetCommand(input, context);
    };
    CreateDataSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDataSetCommand(output, context);
    };
    return CreateDataSetCommand;
}($Command));
export { CreateDataSetCommand };
//# sourceMappingURL=CreateDataSetCommand.js.map