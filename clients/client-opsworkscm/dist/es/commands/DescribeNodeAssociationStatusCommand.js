import { __extends } from "tslib";
import { DescribeNodeAssociationStatusRequest, DescribeNodeAssociationStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeNodeAssociationStatusCommand, serializeAws_json1_1DescribeNodeAssociationStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Returns the current status of an existing association or disassociation request.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found,
 *       or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DescribeNodeAssociationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodeAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNodeAssociationStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeNodeAssociationStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNodeAssociationStatusCommand(input) {
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
    DescribeNodeAssociationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "DescribeNodeAssociationStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNodeAssociationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNodeAssociationStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNodeAssociationStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeNodeAssociationStatusCommand(input, context);
    };
    DescribeNodeAssociationStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeNodeAssociationStatusCommand(output, context);
    };
    return DescribeNodeAssociationStatusCommand;
}($Command));
export { DescribeNodeAssociationStatusCommand };
//# sourceMappingURL=DescribeNodeAssociationStatusCommand.js.map