import { __extends } from "tslib";
import { ListResourceRecordSetsRequest, ListResourceRecordSetsResponse } from "../models/models_0";
import { deserializeAws_restXmlListResourceRecordSetsCommand, serializeAws_restXmlListResourceRecordSetsCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resource record sets in a specified hosted zone.</p>
 * 		       <p>
 *             <code>ListResourceRecordSets</code> returns up to 300 resource record sets at a time in ASCII order,
 * 			beginning at a position specified by the <code>name</code> and <code>type</code> elements.</p>
 *
 * 		       <p>
 *             <b>Sort order</b>
 *          </p>
 * 			      <p>
 *             <code>ListResourceRecordSets</code> sorts results first by DNS name with the labels reversed, for example:</p>
 * 			      <p>
 *             <code>com.example.www.</code>
 *          </p>
 * 			      <p>Note the trailing dot, which can change the sort order when the record name contains characters that appear before
 * 				<code>.</code> (decimal 46) in the ASCII table. These characters include the following: <code>! " # $ % & ' ( ) * + , -</code>
 *          </p>
 * 			      <p>When multiple records have the same DNS name, <code>ListResourceRecordSets</code> sorts results by the record type.</p>
 *
 * 		       <p>
 *             <b>Specifying where to start listing records</b>
 *          </p>
 * 			      <p>You can use the name and type elements to specify the resource record set that the list begins with:</p>
 * 			      <dl>
 *             <dt>If you do not specify Name or Type</dt>
 *             <dd>
 *                <p>The results begin with the first resource record set that the hosted zone contains.</p>
 *             </dd>
 *             <dt>If you specify Name but not Type</dt>
 *             <dd>
 *                <p>The results begin with the first resource record set in the list whose name is greater than or equal to
 * 						<code>Name</code>.</p>
 *             </dd>
 *             <dt>If you specify Type but not Name</dt>
 *             <dd>
 *                <p>Amazon Route 53 returns the <code>InvalidInput</code> error.</p>
 *             </dd>
 *             <dt>If you specify both Name and Type</dt>
 *             <dd>
 *                <p>The results begin with the first resource record set in the list whose name is greater than or equal to
 * 						<code>Name</code>, and whose type is greater than or equal to <code>Type</code>.</p>
 *             </dd>
 *          </dl>
 *
 * 		       <p>
 *             <b>Resource record sets that are PENDING</b>
 *          </p>
 * 			      <p>This action returns the most current version of the records. This includes records that are <code>PENDING</code>,
 * 				and that are not yet available on all Route 53 DNS servers.</p>
 *
 * 		       <p>
 *             <b>Changing resource record sets</b>
 *          </p>
 * 			      <p>To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time,
 * 				do not submit a <code>ChangeResourceRecordSets</code> request while you're paging through the results of a
 * 				<code>ListResourceRecordSets</code> request. If you do, some pages may display results without the latest changes
 * 				while other pages display results with the latest changes.</p>
 *
 * 		       <p>
 *             <b>Displaying the next page of results</b>
 *          </p>
 * 			      <p>If a <code>ListResourceRecordSets</code> command returns more than one page of results, the value of <code>IsTruncated</code>
 * 				is <code>true</code>. To display the next page of results, get the values of <code>NextRecordName</code>, <code>NextRecordType</code>,
 * 				and <code>NextRecordIdentifier</code> (if any) from the response. Then submit another <code>ListResourceRecordSets</code> request, and
 * 				specify those values for <code>StartRecordName</code>, <code>StartRecordType</code>, and <code>StartRecordIdentifier</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListResourceRecordSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListResourceRecordSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceRecordSetsCommandInput} for command's `input` shape.
 * @see {@link ListResourceRecordSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceRecordSetsCommand = /** @class */ (function (_super) {
    __extends(ListResourceRecordSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceRecordSetsCommand(input) {
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
    ListResourceRecordSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListResourceRecordSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceRecordSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceRecordSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceRecordSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListResourceRecordSetsCommand(input, context);
    };
    ListResourceRecordSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListResourceRecordSetsCommand(output, context);
    };
    return ListResourceRecordSetsCommand;
}($Command));
export { ListResourceRecordSetsCommand };
//# sourceMappingURL=ListResourceRecordSetsCommand.js.map