import { __extends } from "tslib";
import { CreateDataSourceRequest, CreateDataSourceResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDataSourceCommand, serializeAws_restJson1CreateDataSourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataSourceCommand = /** @class */ (function (_super) {
    __extends(CreateDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDataSourceCommand(input) {
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
    CreateDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDataSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDataSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDataSourceCommand(input, context);
    };
    CreateDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDataSourceCommand(output, context);
    };
    return CreateDataSourceCommand;
}($Command));
export { CreateDataSourceCommand };
//# sourceMappingURL=CreateDataSourceCommand.js.map