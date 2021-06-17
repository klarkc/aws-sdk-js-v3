import { __extends } from "tslib";
import { ListTrailsRequest, ListTrailsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTrailsCommand, serializeAws_json1_1ListTrailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists trails that are in the current account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListTrailsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListTrailsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new ListTrailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrailsCommandInput} for command's `input` shape.
 * @see {@link ListTrailsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrailsCommand = /** @class */ (function (_super) {
    __extends(ListTrailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrailsCommand(input) {
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
    ListTrailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "ListTrailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTrailsCommand(input, context);
    };
    ListTrailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTrailsCommand(output, context);
    };
    return ListTrailsCommand;
}($Command));
export { ListTrailsCommand };
//# sourceMappingURL=ListTrailsCommand.js.map