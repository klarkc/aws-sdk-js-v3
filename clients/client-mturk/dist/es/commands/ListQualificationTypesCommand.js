import { __extends } from "tslib";
import { ListQualificationTypesRequest, ListQualificationTypesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListQualificationTypesCommand, serializeAws_json1_1ListQualificationTypesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The
 *             <code>ListQualificationTypes</code>
 *             operation returns a list of Qualification types, filtered by
 *             an optional search term.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationTypesCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationTypesCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListQualificationTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQualificationTypesCommandInput} for command's `input` shape.
 * @see {@link ListQualificationTypesCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQualificationTypesCommand = /** @class */ (function (_super) {
    __extends(ListQualificationTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQualificationTypesCommand(input) {
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
    ListQualificationTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListQualificationTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQualificationTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQualificationTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQualificationTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListQualificationTypesCommand(input, context);
    };
    ListQualificationTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListQualificationTypesCommand(output, context);
    };
    return ListQualificationTypesCommand;
}($Command));
export { ListQualificationTypesCommand };
//# sourceMappingURL=ListQualificationTypesCommand.js.map