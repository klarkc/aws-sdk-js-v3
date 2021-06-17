import { __extends } from "tslib";
import { DescribeEntitiesDetectionV2JobRequest, DescribeEntitiesDetectionV2JobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand, serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with a medical entities detection job. Use this operation
 *       to get the status of a detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribeEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link DescribeEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEntitiesDetectionV2JobCommand = /** @class */ (function (_super) {
    __extends(DescribeEntitiesDetectionV2JobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEntitiesDetectionV2JobCommand(input) {
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
    DescribeEntitiesDetectionV2JobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "DescribeEntitiesDetectionV2JobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEntitiesDetectionV2JobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEntitiesDetectionV2JobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEntitiesDetectionV2JobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(input, context);
    };
    DescribeEntitiesDetectionV2JobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(output, context);
    };
    return DescribeEntitiesDetectionV2JobCommand;
}($Command));
export { DescribeEntitiesDetectionV2JobCommand };
//# sourceMappingURL=DescribeEntitiesDetectionV2JobCommand.js.map