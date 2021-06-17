import { __extends } from "tslib";
import { DisassociateRepositoryRequest, DisassociateRepositoryResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateRepositoryCommand, serializeAws_restJson1DisassociateRepositoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the association between Amazon CodeGuru Reviewer and a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DisassociateRepositoryCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DisassociateRepositoryCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DisassociateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRepositoryCommandInput} for command's `input` shape.
 * @see {@link DisassociateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateRepositoryCommand = /** @class */ (function (_super) {
    __extends(DisassociateRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateRepositoryCommand(input) {
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
    DisassociateRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "DisassociateRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateRepositoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateRepositoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateRepositoryCommand(input, context);
    };
    DisassociateRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateRepositoryCommand(output, context);
    };
    return DisassociateRepositoryCommand;
}($Command));
export { DisassociateRepositoryCommand };
//# sourceMappingURL=DisassociateRepositoryCommand.js.map