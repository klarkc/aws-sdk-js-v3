import { __extends } from "tslib";
import { ListHITsRequest, ListHITsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListHITsCommand, serializeAws_json1_1ListHITsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>ListHITs</code>
 *             operation returns all of a Requester's HITs. The operation returns
 *             HITs of any status, except for HITs that have been deleted of with
 *             the DeleteHIT operation or that have been auto-deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListHITsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHITsCommandInput} for command's `input` shape.
 * @see {@link ListHITsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHITsCommand = /** @class */ (function (_super) {
    __extends(ListHITsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHITsCommand(input) {
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
    ListHITsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListHITsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHITsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHITsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHITsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListHITsCommand(input, context);
    };
    ListHITsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListHITsCommand(output, context);
    };
    return ListHITsCommand;
}($Command));
export { ListHITsCommand };
//# sourceMappingURL=ListHITsCommand.js.map