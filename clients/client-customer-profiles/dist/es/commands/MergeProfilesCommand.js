import { __extends } from "tslib";
import { MergeProfilesRequest, MergeProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1MergeProfilesCommand, serializeAws_restJson1MergeProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and subject to change.</p>
 *          <p>Runs an AWS Lambda job that does the following:</p>
 *          <ol>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main
 *                profile.</p>
 *             </li>
 *             <li>
 *                <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p>
 *             </li>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>Standard fields are merged as follows:</p>
 *                <ol>
 *                   <li>
 *                      <p>Fields are always "union"-ed if there are no conflicts in standard fields or
 *                      attributeKeys.</p>
 *                   </li>
 *                   <li>
 *                      <p>When there are conflicting fields:</p>
 *
 *                      <ol>
 *                         <li>
 *                            <p>If no <code>SourceProfileIds</code> entry is specified, the main
 *                            Profile value is always taken. </p>
 *                         </li>
 *                         <li>
 *                            <p>If a <code>SourceProfileIds</code> entry is specified, the specified
 *                            profileId is always taken, even if it is a NULL value.</p>
 *                         </li>
 *                      </ol>
 *                   </li>
 *                </ol>
 *             </li>
 *          </ol>
 *          <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which
 *          returns potentially matching profiles, or use it with the results of another matching
 *          system. After profiles have been merged, they cannot be separated (unmerged).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, MergeProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, MergeProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new MergeProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeProfilesCommandInput} for command's `input` shape.
 * @see {@link MergeProfilesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MergeProfilesCommand = /** @class */ (function (_super) {
    __extends(MergeProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MergeProfilesCommand(input) {
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
    MergeProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "MergeProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MergeProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: MergeProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MergeProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1MergeProfilesCommand(input, context);
    };
    MergeProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1MergeProfilesCommand(output, context);
    };
    return MergeProfilesCommand;
}($Command));
export { MergeProfilesCommand };
//# sourceMappingURL=MergeProfilesCommand.js.map