import { __extends } from "tslib";
import { DescribeDRTAccessRequest, DescribeDRTAccessResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDRTAccessCommand, serializeAws_json1_1DescribeDRTAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current role and list of Amazon S3 log buckets used by the DDoS Response Team (DRT) to access your AWS account while assisting with attack mitigation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeDRTAccessCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeDRTAccessCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeDRTAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDRTAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeDRTAccessCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDRTAccessCommand = /** @class */ (function (_super) {
    __extends(DescribeDRTAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDRTAccessCommand(input) {
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
    DescribeDRTAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DescribeDRTAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDRTAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDRTAccessResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDRTAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDRTAccessCommand(input, context);
    };
    DescribeDRTAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDRTAccessCommand(output, context);
    };
    return DescribeDRTAccessCommand;
}($Command));
export { DescribeDRTAccessCommand };
//# sourceMappingURL=DescribeDRTAccessCommand.js.map