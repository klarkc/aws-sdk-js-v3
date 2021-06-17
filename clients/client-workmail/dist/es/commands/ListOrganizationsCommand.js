import { __extends } from "tslib";
import { ListOrganizationsRequest, ListOrganizationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListOrganizationsCommand, serializeAws_json1_1ListOrganizationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summaries of the customer's organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListOrganizationsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListOrganizationsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListOrganizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOrganizationsCommand = /** @class */ (function (_super) {
    __extends(ListOrganizationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOrganizationsCommand(input) {
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
    ListOrganizationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "ListOrganizationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOrganizationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOrganizationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOrganizationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOrganizationsCommand(input, context);
    };
    ListOrganizationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOrganizationsCommand(output, context);
    };
    return ListOrganizationsCommand;
}($Command));
export { ListOrganizationsCommand };
//# sourceMappingURL=ListOrganizationsCommand.js.map