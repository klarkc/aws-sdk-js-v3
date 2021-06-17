import { __extends } from "tslib";
import { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListExperimentsCommand, serializeAws_json1_1ListExperimentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the experiments in your account. The list can be filtered to show only
 *       experiments that were created in a specific time range. The list can be sorted by experiment
 *       name or creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListExperimentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListExperimentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListExperimentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListExperimentsCommand = /** @class */ (function (_super) {
    __extends(ListExperimentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListExperimentsCommand(input) {
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
    ListExperimentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListExperimentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListExperimentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListExperimentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListExperimentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListExperimentsCommand(input, context);
    };
    ListExperimentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListExperimentsCommand(output, context);
    };
    return ListExperimentsCommand;
}($Command));
export { ListExperimentsCommand };
//# sourceMappingURL=ListExperimentsCommand.js.map