import { __extends } from "tslib";
import { CopyPackageVersionsRequest, CopyPackageVersionsResult } from "../models/models_0";
import { deserializeAws_restJson1CopyPackageVersionsCommand, serializeAws_restJson1CopyPackageVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Copies package versions from one repository to another repository in the same domain.
 *       </p>
 *          <note>
 *             <p>
 *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, CopyPackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, CopyPackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new CopyPackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyPackageVersionsCommandInput} for command's `input` shape.
 * @see {@link CopyPackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyPackageVersionsCommand = /** @class */ (function (_super) {
    __extends(CopyPackageVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyPackageVersionsCommand(input) {
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
    CopyPackageVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "CopyPackageVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyPackageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CopyPackageVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyPackageVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CopyPackageVersionsCommand(input, context);
    };
    CopyPackageVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CopyPackageVersionsCommand(output, context);
    };
    return CopyPackageVersionsCommand;
}($Command));
export { CopyPackageVersionsCommand };
//# sourceMappingURL=CopyPackageVersionsCommand.js.map