import { __extends } from "tslib";
import { ListFiltersRequest, ListFiltersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFiltersCommand, serializeAws_json1_1ListFiltersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all filters that belong to a given dataset group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListFiltersCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListFiltersCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFiltersCommandInput} for command's `input` shape.
 * @see {@link ListFiltersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFiltersCommand = /** @class */ (function (_super) {
    __extends(ListFiltersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFiltersCommand(input) {
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
    ListFiltersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListFiltersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFiltersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFiltersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFiltersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFiltersCommand(input, context);
    };
    ListFiltersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFiltersCommand(output, context);
    };
    return ListFiltersCommand;
}($Command));
export { ListFiltersCommand };
//# sourceMappingURL=ListFiltersCommand.js.map