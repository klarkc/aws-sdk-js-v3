import { __extends } from "tslib";
import { UpdatePackageVersionsStatusRequest, UpdatePackageVersionsStatusResult } from "../models/models_0";
import { deserializeAws_restJson1UpdatePackageVersionsStatusCommand, serializeAws_restJson1UpdatePackageVersionsStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Updates the status of one or more versions of a package.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, UpdatePackageVersionsStatusCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, UpdatePackageVersionsStatusCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new UpdatePackageVersionsStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePackageVersionsStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageVersionsStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePackageVersionsStatusCommand = /** @class */ (function (_super) {
    __extends(UpdatePackageVersionsStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePackageVersionsStatusCommand(input) {
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
    UpdatePackageVersionsStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "UpdatePackageVersionsStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePackageVersionsStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePackageVersionsStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePackageVersionsStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePackageVersionsStatusCommand(input, context);
    };
    UpdatePackageVersionsStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePackageVersionsStatusCommand(output, context);
    };
    return UpdatePackageVersionsStatusCommand;
}($Command));
export { UpdatePackageVersionsStatusCommand };
//# sourceMappingURL=UpdatePackageVersionsStatusCommand.js.map