import { __extends } from "tslib";
import { ListPHIDetectionJobsRequest, ListPHIDetectionJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPHIDetectionJobsCommand, serializeAws_json1_1ListPHIDetectionJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of protected health information (PHI) detection jobs that you have
 *       submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListPHIDetectionJobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListPHIDetectionJobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListPHIDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPHIDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListPHIDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPHIDetectionJobsCommand = /** @class */ (function (_super) {
    __extends(ListPHIDetectionJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPHIDetectionJobsCommand(input) {
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
    ListPHIDetectionJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "ListPHIDetectionJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPHIDetectionJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPHIDetectionJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPHIDetectionJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPHIDetectionJobsCommand(input, context);
    };
    ListPHIDetectionJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPHIDetectionJobsCommand(output, context);
    };
    return ListPHIDetectionJobsCommand;
}($Command));
export { ListPHIDetectionJobsCommand };
//# sourceMappingURL=ListPHIDetectionJobsCommand.js.map