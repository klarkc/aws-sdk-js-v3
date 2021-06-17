import { __extends } from "tslib";
import { ListPageReceiptsRequest, ListPageReceiptsResult } from "../models/models_0";
import { deserializeAws_json1_1ListPageReceiptsCommand, serializeAws_json1_1ListPageReceiptsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the engagements to contact channels that have been acknowledged. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPageReceiptsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPageReceiptsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPageReceiptsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPageReceiptsCommandInput} for command's `input` shape.
 * @see {@link ListPageReceiptsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPageReceiptsCommand = /** @class */ (function (_super) {
    __extends(ListPageReceiptsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPageReceiptsCommand(input) {
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
    ListPageReceiptsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "ListPageReceiptsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPageReceiptsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPageReceiptsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPageReceiptsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPageReceiptsCommand(input, context);
    };
    ListPageReceiptsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPageReceiptsCommand(output, context);
    };
    return ListPageReceiptsCommand;
}($Command));
export { ListPageReceiptsCommand };
//# sourceMappingURL=ListPageReceiptsCommand.js.map