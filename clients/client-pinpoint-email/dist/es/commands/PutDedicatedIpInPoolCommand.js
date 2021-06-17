import { __extends } from "tslib";
import { PutDedicatedIpInPoolRequest, PutDedicatedIpInPoolResponse } from "../models/models_0";
import { deserializeAws_restJson1PutDedicatedIpInPoolCommand, serializeAws_restJson1PutDedicatedIpInPoolCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
 *         <note>
 *             <p>The dedicated IP address that you specify must already exist, and must be
 *                 associated with your Amazon Pinpoint account.
 *
 *             </p>
 *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
 *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
 *
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutDedicatedIpInPoolCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutDedicatedIpInPoolCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutDedicatedIpInPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDedicatedIpInPoolCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpInPoolCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDedicatedIpInPoolCommand = /** @class */ (function (_super) {
    __extends(PutDedicatedIpInPoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDedicatedIpInPoolCommand(input) {
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
    PutDedicatedIpInPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutDedicatedIpInPoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDedicatedIpInPoolRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDedicatedIpInPoolResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDedicatedIpInPoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutDedicatedIpInPoolCommand(input, context);
    };
    PutDedicatedIpInPoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutDedicatedIpInPoolCommand(output, context);
    };
    return PutDedicatedIpInPoolCommand;
}($Command));
export { PutDedicatedIpInPoolCommand };
//# sourceMappingURL=PutDedicatedIpInPoolCommand.js.map