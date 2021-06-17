import { __extends } from "tslib";
import { DeletePackageVersionsRequest, DeletePackageVersionsResult } from "../models/models_0";
import { deserializeAws_restJson1DeletePackageVersionsCommand, serializeAws_restJson1DeletePackageVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes one or more versions of a package. A deleted package version cannot be restored
 *       in your repository. If you want to remove a package version from your repository and be able
 *       to restore it later, set its status to <code>Archived</code>. Archived packages cannot be
 *       downloaded from a repository and don't show up with list package APIs (for example,
 *           <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListackageVersions</a>), but you can restore them using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeletePackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeletePackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeletePackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackageVersionsCommandInput} for command's `input` shape.
 * @see {@link DeletePackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePackageVersionsCommand = /** @class */ (function (_super) {
    __extends(DeletePackageVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePackageVersionsCommand(input) {
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
    DeletePackageVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "DeletePackageVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePackageVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePackageVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePackageVersionsCommand(input, context);
    };
    DeletePackageVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePackageVersionsCommand(output, context);
    };
    return DeletePackageVersionsCommand;
}($Command));
export { DeletePackageVersionsCommand };
//# sourceMappingURL=DeletePackageVersionsCommand.js.map