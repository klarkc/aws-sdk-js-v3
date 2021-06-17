import { __extends } from "tslib";
import { ListDeploymentJobsRequest, ListDeploymentJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDeploymentJobsCommand, serializeAws_restJson1ListDeploymentJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to
 *          retrieve specific deployment jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListDeploymentJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListDeploymentJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListDeploymentJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentJobsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeploymentJobsCommand = /** @class */ (function (_super) {
    __extends(ListDeploymentJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeploymentJobsCommand(input) {
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
    ListDeploymentJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListDeploymentJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeploymentJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeploymentJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeploymentJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDeploymentJobsCommand(input, context);
    };
    ListDeploymentJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDeploymentJobsCommand(output, context);
    };
    return ListDeploymentJobsCommand;
}($Command));
export { ListDeploymentJobsCommand };
//# sourceMappingURL=ListDeploymentJobsCommand.js.map