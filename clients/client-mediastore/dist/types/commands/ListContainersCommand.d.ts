import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { ListContainersInput, ListContainersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListContainersCommandInput extends ListContainersInput {
}
export interface ListContainersCommandOutput extends ListContainersOutput, __MetadataBearer {
}
/**
 * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p>
 *          <p>You can query to receive all the containers in one response. Or you can include the
 *             <code>MaxResults</code> parameter to receive a limited number of containers in each
 *          response. In this case, the response includes a token. To get the next set of containers,
 *          send the command again, this time with the <code>NextToken</code> parameter (with the
 *          returned token as its value). The next set of responses appears, with a token if there are
 *          still more containers to receive. </p>
 *          <p>See also <a>DescribeContainer</a>, which gets the properties of one
 *          container. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, ListContainersCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, ListContainersCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new ListContainersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContainersCommandInput} for command's `input` shape.
 * @see {@link ListContainersCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListContainersCommand extends $Command<ListContainersCommandInput, ListContainersCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: ListContainersCommandInput;
    constructor(input: ListContainersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContainersCommandInput, ListContainersCommandOutput>;
    private serialize;
    private deserialize;
}
