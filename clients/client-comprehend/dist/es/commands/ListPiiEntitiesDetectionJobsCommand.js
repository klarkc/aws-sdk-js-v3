import { __extends } from "tslib";
import { ListPiiEntitiesDetectionJobsRequest, ListPiiEntitiesDetectionJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommand, serializeAws_json1_1ListPiiEntitiesDetectionJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the PII entity detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListPiiEntitiesDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPiiEntitiesDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListPiiEntitiesDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPiiEntitiesDetectionJobsCommand = /** @class */ (function (_super) {
    __extends(ListPiiEntitiesDetectionJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPiiEntitiesDetectionJobsCommand(input) {
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
    ListPiiEntitiesDetectionJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "ListPiiEntitiesDetectionJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPiiEntitiesDetectionJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPiiEntitiesDetectionJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPiiEntitiesDetectionJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPiiEntitiesDetectionJobsCommand(input, context);
    };
    ListPiiEntitiesDetectionJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommand(output, context);
    };
    return ListPiiEntitiesDetectionJobsCommand;
}($Command));
export { ListPiiEntitiesDetectionJobsCommand };
//# sourceMappingURL=ListPiiEntitiesDetectionJobsCommand.js.map