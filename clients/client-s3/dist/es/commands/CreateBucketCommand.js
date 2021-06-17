import { __extends } from "tslib";
import { CreateBucketOutput, CreateBucketRequest } from "../models/models_0";
import { deserializeAws_restXmlCreateBucketCommand, serializeAws_restXmlCreateBucketCommand, } from "../protocols/Aws_restXml";
import { getLocationConstraintPlugin } from "@aws-sdk/middleware-location-constraint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a
 *          valid AWS Access Key ID to authenticate requests. Anonymous requests are never allowed to
 *          create buckets. By creating the bucket, you become the bucket owner.</p>
 *          <p>Not every string is an acceptable bucket name. For information about bucket naming
 *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Bucket naming rules</a>.</p>
 *          <p>If you want to create an Amazon S3 on Outposts bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">Create Bucket</a>. </p>
 *          <p>By default, the bucket is created in the US East (N. Virginia) Region. You can
 *          optionally specify a Region in the request body. You might choose a Region to optimize
 *          latency, minimize costs, or address regulatory requirements. For example, if you reside in
 *          Europe, you will probably find it advantageous to create buckets in the Europe (Ireland)
 *          Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">Accessing a
 *          bucket</a>.</p>
 *          <note>
 *             <p>If you send your create bucket request to the <code>s3.amazonaws.com</code> endpoint,
 *             the request goes to the us-east-1 Region. Accordingly, the signature calculations in
 *             Signature Version 4 must use us-east-1 as the Region, even if the location constraint in
 *             the request specifies another Region where the bucket is to be created. If you create a
 *             bucket in a Region other than US East (N. Virginia), your application must be able to
 *             handle 307 redirect. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html">Virtual hosting of buckets</a>.</p>
 *          </note>
 *          <p>When creating a bucket using this operation, you can optionally specify the accounts or
 *          groups that should be granted specific permissions on the bucket. There are two ways to
 *          grant the appropriate permissions using the request headers.</p>
 *          <ul>
 *             <li>
 *                <p>Specify a canned ACL using the <code>x-amz-acl</code> request header. Amazon S3
 *                supports a set of predefined ACLs, known as <i>canned ACLs</i>. Each
 *                canned ACL has a predefined set of grantees and permissions. For more information,
 *                see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
 *             </li>
 *             <li>
 *                <p>Specify access permissions explicitly using the <code>x-amz-grant-read</code>,
 *                   <code>x-amz-grant-write</code>, <code>x-amz-grant-read-acp</code>,
 *                   <code>x-amz-grant-write-acp</code>, and <code>x-amz-grant-full-control</code>
 *                headers. These headers map to the set of permissions Amazon S3 supports in an ACL. For
 *                more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access control list
 *                   (ACL) overview</a>.</p>
 *                <p>You specify each grantee as a type=value pair, where the type is one of the
 *                following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>id</code> – if the value specified is the canonical user ID of an AWS
 *                      account</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>uri</code> – if you are granting permissions to a predefined
 *                      group</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>emailAddress</code> – if the value specified is the email address of
 *                      an AWS account</p>
 *                      <note>
 *                         <p>Using email addresses to specify a grantee is only supported in the following AWS Regions: </p>
 *                         <ul>
 *                            <li>
 *                               <p>US East (N. Virginia)</p>
 *                            </li>
 *                            <li>
 *                               <p>US West (N. California)</p>
 *                            </li>
 *                            <li>
 *                               <p> US West (Oregon)</p>
 *                            </li>
 *                            <li>
 *                               <p> Asia Pacific (Singapore)</p>
 *                            </li>
 *                            <li>
 *                               <p>Asia Pacific (Sydney)</p>
 *                            </li>
 *                            <li>
 *                               <p>Asia Pacific (Tokyo)</p>
 *                            </li>
 *                            <li>
 *                               <p>Europe (Ireland)</p>
 *                            </li>
 *                            <li>
 *                               <p>South America (São Paulo)</p>
 *                            </li>
 *                         </ul>
 *                         <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the AWS General Reference.</p>
 *                      </note>
 *                   </li>
 *                </ul>
 *                <p>For example, the following <code>x-amz-grant-read</code> header grants the AWS accounts identified by account IDs permissions to read object data and its metadata:</p>
 *                <p>
 *                   <code>x-amz-grant-read: id="11112222333", id="444455556666" </code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You can use either a canned ACL or specify access permissions explicitly. You cannot
 *             do both.</p>
 *          </note>
 *
 *
 *          <p>The following operations are related to <code>CreateBucket</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CreateBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new CreateBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBucketCommandInput} for command's `input` shape.
 * @see {@link CreateBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBucketCommand = /** @class */ (function (_super) {
    __extends(CreateBucketCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBucketCommand(input) {
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
    CreateBucketCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getLocationConstraintPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3Client";
        var commandName = "CreateBucketCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBucketRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBucketOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBucketCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateBucketCommand(input, context);
    };
    CreateBucketCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateBucketCommand(output, context);
    };
    return CreateBucketCommand;
}($Command));
export { CreateBucketCommand };
//# sourceMappingURL=CreateBucketCommand.js.map