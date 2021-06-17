import { __extends } from "tslib";
import { ListEntitiesDetectionV2JobsRequest, ListEntitiesDetectionV2JobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand, serializeAws_json1_1ListEntitiesDetectionV2JobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of medical entity detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListEntitiesDetectionV2JobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListEntitiesDetectionV2JobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListEntitiesDetectionV2JobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitiesDetectionV2JobsCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesDetectionV2JobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEntitiesDetectionV2JobsCommand = /** @class */ (function (_super) {
    __extends(ListEntitiesDetectionV2JobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEntitiesDetectionV2JobsCommand(input) {
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
    ListEntitiesDetectionV2JobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "ListEntitiesDetectionV2JobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEntitiesDetectionV2JobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEntitiesDetectionV2JobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEntitiesDetectionV2JobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEntitiesDetectionV2JobsCommand(input, context);
    };
    ListEntitiesDetectionV2JobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand(output, context);
    };
    return ListEntitiesDetectionV2JobsCommand;
}($Command));
export { ListEntitiesDetectionV2JobsCommand };
//# sourceMappingURL=ListEntitiesDetectionV2JobsCommand.js.map