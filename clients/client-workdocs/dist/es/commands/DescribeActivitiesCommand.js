import { __extends } from "tslib";
import { DescribeActivitiesRequest, DescribeActivitiesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeActivitiesCommand, serializeAws_restJson1DescribeActivitiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the user activities in a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeActivitiesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeActivitiesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeActivitiesCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeActivitiesCommand = /** @class */ (function (_super) {
    __extends(DescribeActivitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeActivitiesCommand(input) {
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
    DescribeActivitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeActivitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeActivitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeActivitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeActivitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeActivitiesCommand(input, context);
    };
    DescribeActivitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeActivitiesCommand(output, context);
    };
    return DescribeActivitiesCommand;
}($Command));
export { DescribeActivitiesCommand };
//# sourceMappingURL=DescribeActivitiesCommand.js.map