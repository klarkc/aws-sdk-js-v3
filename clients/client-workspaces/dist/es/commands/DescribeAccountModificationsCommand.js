import { __extends } from "tslib";
import { DescribeAccountModificationsRequest, DescribeAccountModificationsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAccountModificationsCommand, serializeAws_json1_1DescribeAccountModificationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes modifications to the configuration of Bring Your Own
 *          License (BYOL) for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeAccountModificationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeAccountModificationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeAccountModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountModificationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountModificationsCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountModificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountModificationsCommand(input) {
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
    DescribeAccountModificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeAccountModificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountModificationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountModificationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountModificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAccountModificationsCommand(input, context);
    };
    DescribeAccountModificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAccountModificationsCommand(output, context);
    };
    return DescribeAccountModificationsCommand;
}($Command));
export { DescribeAccountModificationsCommand };
//# sourceMappingURL=DescribeAccountModificationsCommand.js.map