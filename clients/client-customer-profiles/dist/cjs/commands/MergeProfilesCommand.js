"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeProfilesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class MergeProfilesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CustomerProfilesClient";
        const commandName = "MergeProfilesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.MergeProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.MergeProfilesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1MergeProfilesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1MergeProfilesCommand(output, context);
    }
}
exports.MergeProfilesCommand = MergeProfilesCommand;
//# sourceMappingURL=MergeProfilesCommand.js.map