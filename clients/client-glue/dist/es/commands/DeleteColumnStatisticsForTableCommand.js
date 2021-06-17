import { __extends } from "tslib";
import { DeleteColumnStatisticsForTableRequest, DeleteColumnStatisticsForTableResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteColumnStatisticsForTableCommand, serializeAws_json1_1DeleteColumnStatisticsForTableCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves table statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteColumnStatisticsForTableCommand = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteColumnStatisticsForTableCommand(input) {
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
    DeleteColumnStatisticsForTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteColumnStatisticsForTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteColumnStatisticsForTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteColumnStatisticsForTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteColumnStatisticsForTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteColumnStatisticsForTableCommand(input, context);
    };
    DeleteColumnStatisticsForTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteColumnStatisticsForTableCommand(output, context);
    };
    return DeleteColumnStatisticsForTableCommand;
}($Command));
export { DeleteColumnStatisticsForTableCommand };
//# sourceMappingURL=DeleteColumnStatisticsForTableCommand.js.map